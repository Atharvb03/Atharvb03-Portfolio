import { X, Github, ExternalLink, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Maximize2, Minimize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState, useRef } from 'react';

interface Project {
  title: string;
  badge?: string;
  category: string;
  status: string;
  description: string;
  tech: string[];
  features: string[];
  github: string;
  images?: string[];
  problem?: string;
  solution?: string;
  fullFeatures?: string[];
  architecture?: string;
  liveUrl?: string;
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const statusColor = (status: string) => {
  if (status === 'Completed') return 'bg-green-100 text-green-700 border border-green-200';
  if (status === 'In Development') return 'bg-yellow-100 text-yellow-700 border border-yellow-200';
  if (status === 'Completed with ongoing improvements') return 'bg-teal-100 text-teal-700 border border-teal-200';
  return 'bg-secondary text-muted-foreground';
};

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const [imgIndex, setImgIndex] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [fitMode, setFitMode] = useState(true);
  const [galleryZoom, setGalleryZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const dragRef = useRef({ x: 0, y: 0, panX: 0, panY: 0 });

  useEffect(() => { setImgIndex(0); setLightbox(false); setZoom(1); setFitMode(true); setGalleryZoom(1); setPan({ x: 0, y: 0 }); }, [project]);

  useEffect(() => {
    if (project) document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, [project]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (!lightbox) onClose(); // Esc only closes main modal, NOT lightbox
        return;
      }
      if (lightbox) return; // block all other keys when lightbox is open
      if (e.key === 'ArrowRight' && project?.images?.length) { setZoom(1); setImgIndex(i => (i + 1) % project.images!.length); }
      if (e.key === 'ArrowLeft' && project?.images?.length) { setZoom(1); setImgIndex(i => (i - 1 + project.images!.length) % project.images!.length); }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose, project, lightbox]);

  if (!project) return null;

  const images = project.images || [];

  return (
    <>
      {/* Lightbox */}
      {lightbox && images.length > 0 && (
        <div className="fixed inset-0 z-[70] flex flex-col bg-black/92 backdrop-blur-sm" onClick={(e) => { e.stopPropagation(); setLightbox(false); }}>

          {/* Top bar — close only */}
          <div className="flex-shrink-0 flex justify-end p-3 pt-4" onClick={(e) => e.stopPropagation()}>
            <button className="bg-white/80 hover:bg-white text-black p-2 rounded-full transition-all" onClick={() => setLightbox(false)}>
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Forward / backward arrows — always visible on sides */}
          {images.length > 1 && (
            <div className="fixed left-0 right-0 flex items-center justify-between z-[80] px-3" style={{ top: '50%', transform: 'translateY(-50%)' }}>
              <button
                className="bg-white/90 hover:bg-white text-black p-3 rounded-full shadow-xl transition-all"
                onClick={(e) => { e.stopPropagation(); setZoom(1); setPan({ x: 0, y: 0 }); setImgIndex(i => (i - 1 + images.length) % images.length); }}>
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                className="bg-white/90 hover:bg-white text-black p-3 rounded-full shadow-xl transition-all"
                onClick={(e) => { e.stopPropagation(); setZoom(1); setPan({ x: 0, y: 0 }); setImgIndex(i => (i + 1) % images.length); }}>
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          )}

          {/* Image area — vertical pan only */}
          <div className="flex-1 flex items-center justify-center overflow-hidden px-16 relative select-none"
            onWheel={(e) => {
              e.preventDefault();
              const delta = e.deltaY < 0 ? 0.15 : -0.15;
              setZoom(z => {
                const newZ = Math.min(5, Math.max(0.25, +(z + delta).toFixed(2)));
                if (newZ <= 1) setPan({ x: 0, y: 0 });
                return newZ;
              });
            }}
            onMouseDown={(e) => {
              if (zoom <= 1) return;
              e.preventDefault();
              e.stopPropagation();
              dragRef.current = { x: e.clientX, y: e.clientY, panX: pan.x, panY: pan.y };
              setDragging(true);
            }}
            onMouseMove={(e) => {
              if (!dragging) return;
              const dy = e.clientY - dragRef.current.y;
              setPan({ x: 0, y: dragRef.current.panY + dy });
            }}
            onMouseUp={(e) => { setDragging(false); if (dragging) e.stopPropagation(); }}
            onMouseLeave={() => setDragging(false)}
            style={{ cursor: zoom > 1 ? (dragging ? 'ns-resize' : 'grab') : 'default' }}
          >
            {/* arrows moved outside */}
            <img
              src={images[imgIndex]}
              alt={`${project.title} screenshot ${imgIndex + 1}`}
              style={{
                transform: `translateY(${pan.y}px) scale(${zoom})`,
                transformOrigin: 'center',
                transition: dragging ? 'none' : 'transform 0.15s ease',
                pointerEvents: 'none',
              }}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
          </div>

          {/* Bottom controls bar */}
          <div className="flex-shrink-0 flex items-center justify-center gap-3 py-4 px-6" onClick={(e) => e.stopPropagation()}>
            <button
              className="bg-white/80 hover:bg-white text-black p-2.5 rounded-full transition-all disabled:opacity-30 shadow"
              onClick={() => { setZoom(z => Math.max(0.25, +(z - 0.25).toFixed(2))); }}
              disabled={zoom <= 0.25}
              title="Zoom out"
            >
              <ZoomOut className="h-5 w-5" />
            </button>
            <span className="text-white/80 text-sm font-mono w-12 text-center">{Math.round(zoom * 100)}%</span>
            <button
              className="bg-white/80 hover:bg-white text-black p-2.5 rounded-full transition-all disabled:opacity-30 shadow"
              onClick={() => { setZoom(z => Math.min(5, +(z + 0.25).toFixed(2))); }}
              disabled={zoom >= 5}
              title="Zoom in"
            >
              <ZoomIn className="h-5 w-5" />
            </button>
            <div className="w-px h-6 bg-white/20 mx-1" />
            <button
              className="bg-white/80 hover:bg-white text-black p-2.5 rounded-full transition-all shadow"
              onClick={() => { setZoom(1); setPan({ x: 0, y: 0 }); }}
              title="Reset"
            >
              <Minimize2 className="h-5 w-5" />
            </button>
            <div className="w-px h-6 bg-white/20 mx-1" />
            <span className="text-white/50 text-xs">{imgIndex + 1} / {images.length} · Scroll to zoom · Drag to pan</span>
          </div>
        </div>
      )}

      {/* Main Modal */}
      <div className="fixed inset-0 z-[55] flex items-start justify-center pt-20 pb-4 px-4 overflow-y-auto" onClick={onClose}>
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        <div className="relative w-full max-w-3xl rounded-2xl shadow-strong border border-border bg-card mb-4" onClick={(e) => e.stopPropagation()}>

          {/* Header */}
          <div className="sticky top-0 z-10 bg-card/95 backdrop-blur-sm border-b border-border px-6 py-4 flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h2 className="text-xl font-bold text-foreground">{project.title}</h2>
                {project.badge && (
                  <span className="bg-amber-100 text-amber-700 border border-amber-300 text-xs font-bold px-2.5 py-0.5 rounded-full">
                    🏆 {project.badge}
                  </span>
                )}
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-block text-xs font-semibold bg-slate-100 text-slate-600 border border-slate-200 px-2.5 py-0.5 rounded-md">
                  {project.category}
                </span>
                <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${statusColor(project.status)}`}>
                  {project.status}
                </span>
              </div>
            </div>
            <button onClick={onClose} className="flex-shrink-0 p-2 rounded-xl hover:bg-secondary transition-colors duration-200">
              <X className="h-5 w-5 text-muted-foreground" />
            </button>
          </div>

          <div className="p-6 space-y-6">

            {/* Image Gallery */}
            {images.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">Screenshots</h3>
                <div className="relative rounded-xl overflow-hidden border border-border bg-secondary/30 group cursor-zoom-in" onClick={() => setLightbox(true)}>
                  <img src={images[imgIndex]} alt={`${project.title} screenshot ${imgIndex + 1}`}
                    className="w-full object-cover max-h-72 transition-transform duration-300 group-hover:scale-[1.02]" />
                  <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="h-3 w-3" /> Click to expand
                  </div>
                  {images.length > 1 && (
                    <>
                      <button onClick={(e) => { e.stopPropagation(); setImgIndex(i => (i - 1 + images.length) % images.length); }}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm p-1.5 rounded-full border border-border hover:bg-background transition-all">
                        <ChevronLeft className="h-4 w-4" />
                      </button>
                      <button onClick={(e) => { e.stopPropagation(); setImgIndex(i => (i + 1) % images.length); }}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm p-1.5 rounded-full border border-border hover:bg-background transition-all">
                        <ChevronRight className="h-4 w-4" />
                      </button>
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                        {images.map((_, i) => (
                          <button key={i} onClick={(e) => { e.stopPropagation(); setImgIndex(i); }}
                            className={`h-1.5 rounded-full transition-all ${i === imgIndex ? 'bg-primary w-4' : 'bg-white/60 w-1.5'}`} />
                        ))}
                      </div>
                    </>
                  )}
                </div>
                {images.length > 1 && (
                  <div className="flex gap-2 mt-2 overflow-x-auto pb-1">
                    {images.map((img, i) => (
                      <button key={i} onClick={() => setImgIndex(i)}
                        className={`flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${i === imgIndex ? 'border-primary' : 'border-border opacity-60 hover:opacity-100'}`}>
                        <img src={img} alt="" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Description */}
            <div>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">About</h3>
              <p className="text-muted-foreground leading-relaxed">{project.description}</p>
            </div>

            {/* Problem */}
            {project.problem && (
              <div className="p-4 rounded-xl bg-red-50 border border-red-100 dark:bg-red-900/10 dark:border-red-900/20">
                <h3 className="text-sm font-semibold text-red-700 dark:text-red-400 uppercase tracking-wider mb-2">🔴 Problem</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{project.problem}</p>
              </div>
            )}

            {/* Solution */}
            {project.solution && (
              <div className="p-4 rounded-xl bg-green-50 border border-green-100 dark:bg-green-900/10 dark:border-green-900/20">
                <h3 className="text-sm font-semibold text-green-700 dark:text-green-400 uppercase tracking-wider mb-2">✅ Solution</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{project.solution}</p>
              </div>
            )}

            {/* Tech Stack */}
            <div>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="bg-blue-100 text-blue-600 border border-blue-200 px-3 py-1 rounded-full text-xs font-semibold">{t}</span>
                ))}
              </div>
            </div>

            {/* Full Feature List */}
            {project.fullFeatures && project.fullFeatures.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">Full Feature List</h3>
                <ul className="space-y-2 grid sm:grid-cols-2 gap-x-6">
                  {project.fullFeatures.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-accent text-base leading-5 flex-shrink-0 mt-0.5">✦</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Architecture */}
            {project.architecture && (
              <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">🏗 Architecture</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{project.architecture}</p>
              </div>
            )}

            {/* Actions */}
            <div className="flex gap-3 pt-2 border-t border-border">
              <Button className="flex-1 gap-2 hero-button" onClick={() => window.open(project.github, '_blank')}>
                <Github className="h-4 w-4" /> View on GitHub
              </Button>
              <Button
                size="icon"
                variant="outline"
                disabled={!project.liveUrl}
                title={project.liveUrl ? 'View Live Demo' : 'Live demo not available'}
                onClick={() => project.liveUrl && window.open(project.liveUrl, '_blank')}
              >
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectModal;

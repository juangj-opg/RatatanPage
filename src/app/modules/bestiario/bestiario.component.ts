import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'app-bestiario',
  templateUrl: './bestiario.component.html',
  styleUrl: './bestiario.component.css',
})
export class BestiarioComponent implements AfterViewInit {
  @ViewChild('gridItems', { static: false }) grid!: ElementRef<HTMLDivElement>;
  @ViewChild('scrollThumb', { static: false })
  thumb!: ElementRef<HTMLDivElement>;
  @ViewChild('scrollBar', { static: false }) bar!: ElementRef<HTMLDivElement>;

  private dragging = false;
  private startY = 0;
  private startTop = 0;

  selectedTab = 3;
  selectedMonster = 0;

  data: Object[] = [
    { name: 'Teshitas' },
    { name: 'Fauna' },
    { name: 'Mini Bosses' },
    { name: 'Bosses' },
  ];

  selectTab(index: number) {
    this.selectedTab = index;
    this.selectedMonster = 0;
  }

  ngAfterViewInit(): void {
    this.updateThumb();
  }

  // Detectar wheel sobre el grid
  @HostListener('wheel', ['$event'])
  onScroll(e: WheelEvent) {
    if (!this.grid) return;
    this.grid.nativeElement.scrollTop += e.deltaY;
    this.updateThumb();
  }

  @HostListener('wheel', ['$event'])
  onWheel(e: WheelEvent) {
    const target = e.target as HTMLElement;

    // Si la rueda NO está sobre gridItems NI sobre scrollbar — salir
    if (
      !this.grid.nativeElement.contains(target) &&
      !this.bar.nativeElement.contains(target)
    ) {
      return;
    }

    e.preventDefault();
    this.grid.nativeElement.scrollTop += e.deltaY;
    this.updateThumb();
  }

  private readonly GAP = 2;

  updateThumb() {
    const grid = this.grid.nativeElement;
    const thumb = this.thumb.nativeElement;
    const bar = this.bar.nativeElement;

    const barUsable = bar.clientHeight - this.GAP * 2; // rango disponible
    const ratio = grid.clientHeight / grid.scrollHeight;
    const thumbHeight = ratio * barUsable;

    thumb.style.height = `${thumbHeight}px`;

    const scrollRatio =
      grid.scrollTop / (grid.scrollHeight - grid.clientHeight);
    thumb.style.top = `${this.GAP + scrollRatio * (barUsable - thumbHeight)}px`;
  }

  onThumbMouseDown(e: MouseEvent) {
    this.dragging = true;
    this.startY = e.clientY;
    this.startTop = parseFloat(this.thumb.nativeElement.style.top) || 0;
    this.thumb.nativeElement.style.cursor = 'grabbing';
  }

  @HostListener('document:mouseup')
  stopDrag() {
    this.dragging = false;
    this.thumb.nativeElement.style.cursor = 'grab';
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    if (!this.dragging) return;

    const bar = this.bar.nativeElement;
    const thumb = this.thumb.nativeElement;
    const grid = this.grid.nativeElement;

    const barUsable = bar.clientHeight - this.GAP * 2;

    const delta = e.clientY - this.startY;
    const newTop = this.startTop + delta;

    const max = this.GAP + barUsable - thumb.clientHeight;
    const clamped = Math.max(this.GAP, Math.min(max, newTop));

    thumb.style.top = `${clamped}px`;

    const scrollRatio = (clamped - this.GAP) / (barUsable - thumb.clientHeight);
    grid.scrollTop = scrollRatio * (grid.scrollHeight - grid.clientHeight);
  }
}

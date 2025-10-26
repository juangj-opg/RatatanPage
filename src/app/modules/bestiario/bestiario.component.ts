import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  HostListener,
} from '@angular/core';
import { Bestiary } from '../../models/Bestiary';
import { Monster } from '../../models/Monster';

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

  nSelectedTab = 3;
  nSelectedMonster = 0;

  data: Bestiary[] = [
    {
      name: 'Teshitas',
      monsters: [
        {
          name: 'Lancero',
          baseHp: 0,
          srcImgGrid: '',
          srcImgInfo: '',
          description: '',
          isBoss: false,
        },
        {
          name: 'Lancero',
          baseHp: 0,
          srcImgGrid: '',
          srcImgInfo: '',
          description: '',
          isBoss: false,
        },
        {
          name: 'Lancero',
          baseHp: 0,
          srcImgGrid: '',
          srcImgInfo: '',
          description: '',
          isBoss: false,
        },
        {
          name: 'Lancero',
          baseHp: 0,
          srcImgGrid: '',
          srcImgInfo: '',
          description: '',
          isBoss: false,
        },
      ],
    },
    {
      name: 'Fauna',
      monsters: [
        {
          name: 'Portrait',
          baseHp: 0,
          srcImgGrid: '',
          srcImgInfo: '',
          description: '',
          isBoss: false,
        },
        {
          name: 'Portrait',
          baseHp: 0,
          srcImgGrid: '',
          srcImgInfo: '',
          description: '',
          isBoss: false,
        },
        {
          name: 'Portrait',
          baseHp: 0,
          srcImgGrid: '',
          srcImgInfo: '',
          description: '',
          isBoss: false,
        },
      ],
    },
    {
      name: 'Mini Bosses',
      monsters: [
        {
          name: 'Squidly Pete',
          baseHp: 4000,
          srcImgGrid: '',
          srcImgInfo: '',
          description: '',
          isBoss: true,
        },
        {
          name: 'Kit Lasso',
          baseHp: 8500,
          srcImgGrid: '',
          srcImgInfo: '',
          description: '',
          isBoss: true,
        },
        {
          name: 'Son Jammer',
          baseHp: 20000,
          srcImgGrid: '',
          srcImgInfo: '',
          description: '',
          isBoss: true,
        },
        {
          name: 'Thawner',
          baseHp: 40000,
          srcImgGrid: '',
          srcImgInfo: '',
          description: '',
          isBoss: true,
        },
        {
          name: 'Boneless Bear',
          baseHp: 75000,
          srcImgGrid: '',
          srcImgInfo: '',
          description: '',
          isBoss: true,
        },
      ],
    },
    {
      name: 'Bosses',
      monsters: [
        {
          name: 'Dekadon (Tutorial)',
          baseHp: 24000,
          srcImgGrid: 'Dekadon.png',
          srcImgInfo: 'Dekadon.png',
          description: '',
          isBoss: true,
        },
        {
          name: 'The Jolly Hermit',
          baseHp: 24000,
          srcImgGrid: '',
          srcImgInfo: '',
          description: '',
          isBoss: true,
        },
        {
          name: 'Wagoon',
          baseHp: 40000,
          srcImgGrid: '',
          srcImgInfo: '',
          description: '',
          isBoss: true,
        },
        {
          name: 'Lord Rosham Bo',
          baseHp: 110000,
          srcImgGrid: '',
          srcImgInfo: '',
          description: '',
          isBoss: true,
        },
        {
          name: 'Chillwarden',
          baseHp: 87000,
          srcImgGrid: '',
          srcImgInfo: '',
          description: '',
          isBoss: true,
        },
        {
          name: 'Flip Flop',
          baseHp: 150000,
          srcImgGrid: '',
          srcImgInfo: '',
          description: '',
          isBoss: true,
        },
        {
          name: 'The Scorvy Hermit',
          baseHp: 0,
          srcImgGrid: '',
          srcImgInfo: '',
          description: '',
          isBoss: true,
        },
        {
          name: 'Windigoon',
          baseHp: 0,
          srcImgGrid: '',
          srcImgInfo: '',
          description: '',
          isBoss: true,
        },
        {
          name: 'Dekadon',
          baseHp: 0,
          srcImgGrid: 'Dekadon.png',
          srcImgInfo: 'Dekadon.png',
          description: '',
          isBoss: true,
        },
        {
          name: 'Charged Dekadon',
          baseHp: 0,
          srcImgGrid: '',
          srcImgInfo: '',
          description: '',
          isBoss: true,
        },
        {
          name: 'Flip Flop (Hard)',
          baseHp: 0,
          srcImgGrid: '',
          srcImgInfo: '',
          description: '',
          isBoss: true,
        },
      ],
    },
  ];

  selectedMonster: Monster =
    this.data[this.nSelectedTab].monsters[this.nSelectedMonster];

  selectTab(index: number) {
    this.nSelectedTab = index;
    this.nSelectedMonster = 0;
    this.selectedMonster =
      this.data[this.nSelectedTab].monsters[this.nSelectedMonster];
  }

  selectMonster(index: number) {
    this.nSelectedMonster = index;
    this.selectedMonster =
      this.data[this.nSelectedTab].monsters[this.nSelectedMonster];
  }

  ngAfterViewInit(): void {
    this.updateThumb();
  }

  @HostListener('wheel', ['$event'])
  onScroll(e: WheelEvent) {
    if (!this.grid) return;
    this.grid.nativeElement.scrollTop += e.deltaY;
    this.updateThumb();
  }

  @HostListener('wheel', ['$event'])
  onWheel(e: WheelEvent) {
    const target = e.target as HTMLElement;

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

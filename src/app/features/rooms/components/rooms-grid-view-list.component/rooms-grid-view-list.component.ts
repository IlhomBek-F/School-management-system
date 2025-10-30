import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { ButtonModule } from "primeng/button";
import { TagModule } from "primeng/tag";

@Component({
  selector: 'school-rooms-grid-view-list',
  imports: [ButtonModule, TagModule, CommonModule],
  templateUrl: './rooms-grid-view-list.component.html',
  styleUrl: './rooms-grid-view-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomsGridViewListComponent {
  rooms = input.required<any[]>()
  viewDetailEmitEvent = output<any>()
  editEmitEvent = output<any>()

  viewDetails(room: any) {
   this.viewDetailEmitEvent.emit(room)
  }

  editRoom(room: any) {
    this.editEmitEvent.emit(room)
  }

  getStatusSeverity(status: string): string {
    switch(status) {
      case 'Available': return 'success';
      case 'Occupied': return 'warning';
      case 'Maintenance': return 'danger';
      default: return 'info';
    }
  }

  getOccupancyPercentage(current: number, capacity: number): number {
    return Math.round((current / capacity) * 100);
  }

  getOccupancySeverity(percentage: number): string {
    if (percentage === 0) return 'success';
    if (percentage >= 90) return 'danger';
    if (percentage >= 70) return 'warning';
    return 'info';
  }

  getRoomTypeIcon(type: string): string {
    switch(type) {
      case 'Classroom': return 'pi-book';
      case 'Laboratory': return 'pi-flask';
      case 'Computer Lab': return 'pi-desktop';
      case 'Auditorium': return 'pi-users';
      case 'Library': return 'pi-bookmark';
      case 'Sports': return 'pi-star';
      case 'Studio': return 'pi-palette';
      default: return 'pi-building';
    }
  }
}

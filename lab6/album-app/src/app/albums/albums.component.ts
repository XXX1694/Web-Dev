import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
})
export class AlbumsComponent implements OnInit {
  albums: any[] = [];
  newAlbumTitle: string = '';
  showCreateForm: boolean = false;

  constructor(private albumsService: AlbumsService, private router: Router) {}

  ngOnInit() {
    this.albumsService.getAlbums().subscribe((albums) => {
      this.albums = albums;
    });
  }

  goToDetail(id: number) {
    this.router.navigate(['/albums', id]);
  }

  deleteAlbum(id: number) {
    this.albumsService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter((album) => album.id !== id);
    });
  }

  toggleCreateForm() {
    this.showCreateForm = !this.showCreateForm;
  }

  createAlbum() {
    if (this.newAlbumTitle.trim()) {
      const newAlbum = {
        userId: 1,
        title: this.newAlbumTitle,
      };
      this.albumsService.createAlbum(newAlbum).subscribe((album) => {
        this.albums.unshift({ ...album, id: this.albums.length + 101 });
        this.newAlbumTitle = '';
        this.showCreateForm = false;
      });
    }
  }
}

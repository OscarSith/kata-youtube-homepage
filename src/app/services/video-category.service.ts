import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, Signal, signal } from '@angular/core';

export interface Video {
  id: string;
  snippet: {
    publishedAt: Date;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      medium: {
        url: string;
        width: number;
        height: number;
      },
    },
    channelTitle: string;
  };
  statistics: {
    viewCount: string;
  }
}

interface VideoCategoryResponse {
  items: Video[]
}

interface State {
  loading: boolean;
  videos: Video[];
}

@Injectable({
  providedIn: 'root'
})
export class VideoCategoryService {
  private URL = 'https://www.googleapis.com/youtube/v3/videos?key=AIzaSyDM1SBIzg_FnCYFcgAOkuUMyFzcaF60Jes&chart=mostPopular&part=snippet,player,statistics';
  private httpClient = inject(HttpClient);

  #state = signal<State>({
    loading: true,
    videos: [],
  });

  // Señales computadas
  public videos = computed(() => this.#state().videos);
  public loading = computed(() => this.#state().loading);

  constructor() {
    // , {responseType: 'json'}
    this.httpClient.get<VideoCategoryResponse>(this.URL)
      .subscribe(res => {
        this.#state.set({
          loading: false,
          videos: res.items,
        })
      });
  }
}

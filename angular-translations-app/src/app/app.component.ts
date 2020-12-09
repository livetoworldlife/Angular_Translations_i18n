import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  text= '';
  language= 'en';

  constructor(private http: HttpClient, private translateService: TranslateService) {
    this.translateService.setDefaultLang(this.language);
    this.load();
  }

  load(): void {
    const headers = new HttpHeaders({'Accept-Language':this.language});

    this.http.get('http://localhost:8000/text',{headers})
    .subscribe((res: any) => this.text = res.text);
  }

  change(language): void {
    this.language = language;
    this.translateService.use(this.language);
    this.load();
  }

  click(): void {
    this.http.post('http://localhost:8000/like',{})
    .subscribe((res: any) => this.translateService.get(res.message).subscribe((text:any)=>alert(text)));
  }
}

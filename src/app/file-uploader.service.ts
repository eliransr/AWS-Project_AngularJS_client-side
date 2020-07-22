import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class FileUploaderService {

  constructor(private http: HttpClient) { }
  // My Students: please replace the post url below 
  fileUpload(file: FormData) {
  console.log("eliran")
    let a = this.http.post('http://ec2-54-210-238-54.compute-1.amazonaws.com/upload-ng', file);
    console.log("asdasd")
  return a;
  }
}

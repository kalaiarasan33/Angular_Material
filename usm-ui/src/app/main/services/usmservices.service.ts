import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class UsmservicesService {

constructor(
   private http: HttpClient
   ) { 

}
getUsers(){
  return this.http.get('http://localhost/users');
}
createUsers(body: any){
  return this.http.post('http://localhost/createuser',body);
}
deleteUser(id){
  return this.http.delete('http://localhost/deleteusers/'+id)
}
updateUsers(id,body: any){
  return this.http.patch('http://localhost/updateusers/'+id,body);
}

}

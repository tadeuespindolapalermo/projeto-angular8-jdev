import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component'; /*Requisições Ajax*/
import { RouterModule, Routes } from '@angular/router'
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { LoginComponent } from './login/login.component'
import { HttpInterceptorModule } from './service/header-interceptor.service';
import { UsuarioComponent } from './componente/usuario/usuario/usuario.component';
import { UsuarioAddComponent } from './componente/usuario/usuario-add/usuario-add.component';
import { GuardiaoGuard } from './service/guardiao.guard';
import { NgxMaskModule, IConfig } from 'ngx-mask'

export const appRouters: Routes = [
  {path : 'home', component : HomeComponent, canActivate: [GuardiaoGuard]},
  {path : 'login', component : LoginComponent},
  {path : '', component : LoginComponent},
  {path : 'userList', component : UsuarioComponent, canActivate: [GuardiaoGuard]},
  {path : 'usuarioAdd', component : UsuarioAddComponent, canActivate: [GuardiaoGuard]},
  {path : 'usuarioAdd/:id', component : UsuarioAddComponent, canActivate: [GuardiaoGuard]}
];

export const routes : ModuleWithProviders = RouterModule.forRoot(appRouters);

export const optionsMak : Partial<IConfig> | (() => Partial<IConfig>) = {}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UsuarioComponent,
    UsuarioAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routes,
    HttpInterceptorModule,
    NgxMaskModule.forRoot(optionsMak)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

# Angular Journal

Repositórios de estudos Angular

![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)

## Dia 1 ⇒ Componentes e Módulos

Componentes Angular ao serem criados são divididos em arquivos separados.

`.html ⇒` Responsável por conter as `tags` HTML do componente;

`.css ⇒` Responsável por conter os estilos, no Angular os estilos são scoped, ou seja, cada componente possui seu próprio estilos, e esses estilos não vazam para os outros componentes.

`.ts ⇒` Responsável pela lógica do componente, e os eventos que são atribuídos a ela.

`.spec ⇒` arquivos de testes

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/b873b622-685d-41c1-9cf3-d1644eb0b2cc/9db02459-be86-421e-8c98-01dbfd2fa81f/Untitled.png)

### Criação de um componente Angular:

Componente podem ser criados através do `CLI` do Angular:

`ng generate component <nome do componente>` 

Apesar de ser possível criar os componentes de forma manual, é recomendável utilizar a ferramenta de `CLI` para isso, assim dessa maneira o próprio Angular fará todas as configurações necessários para o uso do componente.

Após a geração do componente ele ficará disponível para toda a aplicação, sendo possível invoca-lo como uma `tag HTML` normal, através do seletor do componente que pode ser encontrado no arquivo `.ts` do próprio componente.

```tsx
@Component({
//SELETOR
  selector: 'app-first-component', 
// CAMINHO PARA O ARQUIVO HTML
  templateUrl: './first-component.component.html',
// CAMINHO PARA OS ARQUIVOS CSS, PODE HAVER MAIS DE UM,
// SENDO OS CAMINHÃO PASSADOS DENTRO DE UM ARRAY
  styleUrls: ['./first-component.component.css']
})
//LÓGICA E EVENTOS
export class FirstComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
```

### Módulos:

É forma de colocar vários componentes em um mesmo lugar, componentes obrigatoriamente precisam estar definidos dentro de um módulo.

Os componente definidos que são definidos dentro dos módulos tem acesso uns aos outros, ou seja, se um componente estiver fora do módulo ele não tem acesso as componente que estão dentro e vice-versa.

```tsx
// IMPORTAÇÃO CONFIGURAÇÕES ANGULAR
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
// IMPORTAÇÃO COMPONENTES
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';

@NgModule({
// COMPONENTES SÃO DECLARADOS DENTRO DE DECLARATIONS;
// OS COMPONTES DENTRO DE DECLARATIONS TEM ACESSO UNS OS OUTROS;
  declarations: [
    AppComponent,
    FirstComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

a
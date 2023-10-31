# Angular Journal

Repositórios de estudos Angular

![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)

## Dia 1 ⇒ Componentes e Módulos

Componentes Angular ao serem criados são divididos em arquivos separados.

`.html ⇒` Responsável por conter as `tags` HTML do componente;

`.css ⇒` Responsável por conter os estilos, no Angular os estilos são scoped, ou seja, cada componente possui seu próprio estilos, e esses estilos não vazam para os outros componentes.

`.ts ⇒` Responsável pela lógica do componente, e os eventos que são atribuídos a ela.

`.spec ⇒` arquivos de testes

![](../angular-journal/angular-journal/src/assets/arquivos-de-um-componente.png)

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

## Dia 2 ⇒ `Services` e injeção de dependências

### `Services`

São um parte fundamental da arquitetura Angular, geralmente são neles que ficam localizadas as requisições `HTTP` 

É possível criar através da linha de comando através ⇒ `ng generate service <nome do service >` 

`Services` são classes `TypeScript` que podem ser injetadas por toda a aplicação.

```
import { Injectable } from '@angular/core';
// DECORATOR ANGULAR QUE INDICA ONDE ESSE SERVICE PODE SER INJETADO
@Injectable({
  providedIn: 'root'
})
// AQUI VEM A LÓGICA DO SERVICE
export class CounterService {

  constructor() { }
}
```

### Injeção de dependências

Injeção de dependências é algo muito comum em diversas linguagens de programação, e no Angular ela também existe. Quanto falamos de injeção de dependências dentro do Angular, estamos dizendo a Angular para nos fornecer uma instância de uma classe.

Geralmente a classe que será injetada serão as classes de `services`, e através da injeção teremos acesso aos métodos que essa classe tem a disposição.

No Angular a injeção de dependências ocorre através do construtor da classe do componente que estamos injetando.

```tsx
import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/shared/services/counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  counter: number = 0

// CLASSE SERVICE É INJETADA NO CONSTRUTOR DO COMPONENTE
  constructor(private counterService : CounterService) { }

  ngOnInit(): void {
  }
	
// MÉTODOS DO COMPONENTE AGORA TEM ACESSO AOS MÉTODOS DO SERVICE.
  increment(){
     return this.counter = this.counterService.increment()

  }

  decrement() {
    return this.counter = this.counterService.decrement()
  }

}
```


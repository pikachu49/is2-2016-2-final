import {Routes} from '@angular/router';
import {Component} from '@angular/core';
import {DetailProductComponent} from './components/DetailProduct/index.ts';
import {RegisterProductLotComponent} from './components/RegisterProductLot/index.ts'; 
// import {About} from './about/about';
// import {Home} from './home/home';
// import {RepoBrowser} from './github/repo-browser/repo-browser';
// import {RepoList} from './github/repo-list/repo-list';
// import {RepoDetail} from './github/repo-detail/repo-detail';

@Component({
  template: '<h3>Home :D</h3>'
})
class Home {}

@Component({
  template: '<h3>Test 123</h3>'
})
class Test {}

export const rootRouterConfig: Routes = [
  {path: '', redirectTo: 'home', terminal: true},
  {path: 'home', component: Home},
  {path: 'test', component: Test},
  {path: 'detail-product', component: DetailProductComponent},
  {path: 'register-product-lot', component: RegisterProductLotComponent}
  // {path: 'about', component: About},
  // {path: 'github', component: RepoBrowser,
  //   children: [
  //     {path: '', component: RepoList},
  //     {path: ':org', component: RepoList,
  //       children: [
  //         {path: '', component: RepoDetail},
  //         {path: ':repo', component: RepoDetail}
  //       ]
  //     }]
  // }
];


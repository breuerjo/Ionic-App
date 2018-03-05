import { NgModule, ErrorHandler } from '@angular/core';
import { FlexLayoutModule} from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { StartPage } from '../pages/start/start';
import { HilfePage } from '../pages/hilfe/hilfe';
import { DatenschutzPage } from '../pages/datenschutz/datenschutz';
import { ImpressumPage } from '../pages/impressum/impressum';
import { InfoPage } from '../pages/info/info';
import { NachrichtenPage } from '../pages/nachrichten/nachrichten';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


const firebaseAuth = {                                            //FIREBASE
  apiKey: "AIzaSyChuFfXEpK7CQscJqAnkrL5aDwnECA5ipQ",
  authDomain: "ionic-app-af8f5.firebaseapp.com",
  databaseURL: "https://ionic-app-af8f5.firebaseio.com",
  projectId: "ionic-app-af8f5",
  storageBucket: "ionic-app-af8f5.appspot.com",
  messagingSenderId: "1048625200746"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    StartPage,
    HilfePage,
    DatenschutzPage,
    ImpressumPage,
    InfoPage,
    NachrichtenPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FlexLayoutModule,
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    StartPage,
    HilfePage,
    DatenschutzPage,
    ImpressumPage,
    InfoPage,
    NachrichtenPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

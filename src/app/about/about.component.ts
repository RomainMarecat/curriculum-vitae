import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  experiences = [];
  constructor() {}

  ngOnInit() {
    this.experiences = [{
      title: `ZeeMono`,
      job1: `Développeur Web Angular 2`,
      job2: `Développeur Web Symfony 2 et 3`,
      year: 1,
      description: `Développement d'une application mobile et plus rapide qui traite la réservation et la gestion des agendas de moniteurs de ski basée sur le Framework Angular (2).`,
      description2: `
      <ul>
        <li>Ajout d'une application pour les moniteurs (Angular)</li>
        <li>Ajout d'une application pour les administrateurs (Angular)</li>
        <li>Formulaires (Data-binding)</li>
        <li>Connexion utilisateur avec Auth0 </li>
        <li>Datatables</li>
        <li>Manipulation d'images avec Cloudinary</li>
        <li>Internationalisation</li>
        <li>Mobile Responsive</li>
        <li>Redux</li>
        <li>Refonte de l'api en Middleware (Express Js + MongoDB)</li>
      <p>Développement Back-end d'une API REST pour le site web et l'agenda ZeeMono.</p>
        <ul>
          <li>Scrapping (Symfony 3)</li>
          <li>Refonte du site (Symfony 2.8)</li>
          <li>Moteur de recherche via Doctrine et Google Maps Api</li>
          <li>Back office moniteur et client</li>
          <li>Back office administrateur</li>
          <li>Communication avec MeteorJs et MongoDB</li>
          <li>Connexion utilisateur</li>
          <li>Intégration des pages (Accueil, recherche, profil, back-office)</li>
          <li>Amélioration de l'expérience utilisateur (Symfony 2.8)</li>
          <li>Connexion social (Facebook, Twitter, Google, Instagram)</li>
          <li>Système de paiement MangoPay</li>
          <li>Bon d'achat, remise et bon cadeau</li>
          <li>Cache Redis</li>
          <li>Planning moniteur</li>
          <li>Page de réservation</li>
          <li>Connexion utilisateur</li>
        </ul>`,
      img: {
        alt: `Angular 2`,
        src: `assets/images/angular.svg`
      }
    }, {
      title: `Square Connexion`,
      year: 2,
      job1: `Développeur Web Symfony 2 et AngularJs`,
      description: `Tootici.fr est un projet lancé par le Crédit Agricole en 2011. Le site est devenu à mon arrivé une place de marché e-commerce spécialisé dans les produits régionaux de petits commerçants. Le développement du site est basé sous le Framework Symfony 2.7.`,
      description2: `<p>Refonte du site en API Rest :</p>
      <ul>
        <li>Intégrer un moteur de recherche Solr, ElasticSearch, Sphinx.</li>
        <li>Connexion social (Facebook, twitter, google)</li>
        <li>Connexion utilisateur</li>
        <li>Système de paiement (Paybox direct plus)</li>
        <li>Bons d’achat</li>
        <li>Import de masse d’images, produits (RabbitMQ)</li>
        <li>Back Office des produits, marchands, magasins</li>
        <li>Utilisation de technologies No-SQL tel que Redis.</li>
        <li>Mise en place de tests unitaires et fonctionnels.</li>
        <li>Outils de monitoring pour gérer les logs (Logstash, Kibana,  ElasticSearch).</li>
        <li>Montée en compétence en UX Design pour le e-commerce.</li>
      </ul>
      <p>Développement de la page d'accueil et du menu de navigation avec le framework AngularJs</p>`,
      img: {
        alt: `Symfony 2`,
        src: `assets/images/symfony.svg`
      }
    }, {
      title: `Mairie de Voreppe`,
      job1: `Développeur Web Symfony 2`,
      year: 1,
      description: `Développement de plusieurs applications métiers au sein du service informatique.`,
      description2: `<p>Développement de plusieurs applications métiers au sein de la DSI.</p>
        <p>Réalisation d'applications métiers avec Symfony 2.3 :</p>
        <ul>
          <li>Réaliser une application de données fiscales</li>
          <li>Réaliser une application de gestion et d’envoi d’informations</li>
          <li>Application de gestion d’élèves de l’ecole de Musique de Voreppe</li>
          <li>Maintenir les applications Etat Civil et de la Population en Symfony 1.4.</li>
        </ul>`,
      img: {
        alt: `Symfony 2`,
        src: `assets/images/symfony.svg`
      }
    }, {
      title: `Conseil général de l'Isère`,
      job1: `Développeur PHP Symfony 2 en Stage`,
      month: 4,
      description: `Développement avec le Framework Symfony 2.1 d’un référentiel
d’applications : export de données, CRUD des données`,
      img: {
        alt: `Symfony 2`,
        src: `assets/images/symfony.svg`
      }
    }];
  }

}

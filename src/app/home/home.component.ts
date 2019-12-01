import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  experiences: object[] = [
    {
      title: 'Software Developer',
      company: 'Hyland Software',
      start: 'July 2019',
      end: 'Present',
      description: 'Being on a team that is an early adopter of a new technology stack, I helped work cross-team to share new ideas and discoveries, provided input as architecture decisions are made, and optimized our workflow in a new environment. I helped my team build a product from the ground up that set an example of how new products look and operate following the company’s modernized vision.',
      accomplishments: 
      [
        'Built a new healthcare product using Angular and .NET Core C#',
        'Pioneered the company’s modernized technology stack',
        'Provided developer input as architecture decisions were made'
      ]
    },
    {
      title: 'Intern Software Developer',
      company: 'Hyland Software',
      start: '2017',
      end: '2019',
      description: 'Through this internship I familiarized myself with what a large-scale software company looks and feels like. As a result, I was able to use the knowledge and skills I gained to further increase my value as I took university courses. Through this experience I demonstrated my skills, making me a desirable candidate for a full-time software developer.',
      accomplishments: 
      [
        'Built internal utilities using to help further my team’s success',
        'Learned about new technologies and shared my findings',
        'Implemented change requests on a real company product'
      ]
    },
    {
      title: 'Intern Web Developer',
      company: 'Firstar Precision Machining',
      start: 'May',
      end: 'August 2014',
      description: 'This experience between my junior and senior year of high school was my first experience creating software for a client that would have real users. This experience showed me that computer software was something I really enjoyed, and inspired me to take up occasional freelance web development to have a creative outlet for designing interfaces ever since.',
      accomplishments: 
      [
        'Designed and Built a company website using ASP.NET C#',
        'Moved customer data from excel to a relational database',
        'Created an internal windows form application to view and manage customer data'
      ]
    },
  ];

  works: object[] = [
    {
      tab_title: 'Ballistic Motion',
      title: 'Ballistic Motion Analysis Software',
      year_built: '2018',
      description: 'Built in partnership with professors from Alma college, this project was a game and application combination that allowed experimenters to test a participant’s ability to precieve ballistic motion on a computer screen. The experimenters are able to set up trials which test the limitations of the participant’s ability to make one projectile collide with another while collecting real-time data on how the user is interacting with the software.',
    },
    {
      tab_title: 'Netiquity',
      title: 'Netiquity',
      year_built: '2017',
      description: 'Built during my time at the Baldwin Wallace University IT department, this project uses simple network management protocol to intermittently asses the status of all network switches on the network and provide a live uptime and status report to the network administrators.',
    },
  ];

  constructor() { }

  ngOnInit() {
    console.log(this.experiences);
  }

}

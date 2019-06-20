import { Component } from '@angular/core';

import { Hero }    from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {

  Branch = ['Computer Science', 'Information Technical',
            'Electronic', 'Mechnical'];

  Designation = ['Software Engineer', 'Software Developer',
            'Machine Learning'];

  City = ['Hyderabad', 'Mumbai',
            'Pune'];

  model = new Hero('','',0,this.Designation[0],this.Branch[0],this.City[0] );

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  newHero() {
    this.model = new Hero('', '',12,'','','');
  }



  //////// NOT SHOWN IN DOCS ////////

  // Reveal in html:
  //   Name via form.controls = {{showFormControls(heroForm)}}
  showFormControls(form: any) {
    return form && form.controls['name'] &&
    form.controls['name'].value; 
  }

  /////////////////////////////

}

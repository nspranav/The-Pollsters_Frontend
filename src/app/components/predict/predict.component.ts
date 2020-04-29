import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Predict } from "../../interfaces/predict";
import { PostService } from "../../services/post.service";
import { Response } from "../../interfaces/response";
import { Data } from 'src/app/providers/data';

@Component({
  selector: 'app-predict',
  templateUrl: './predict.component.html',
  styleUrls: ['./predict.component.css']
})

export class PredictComponent implements OnInit {

  constructor(
    private service:PostService,
    private router: Router,
    public data: Data
    ) {}

  ngOnInit(): void {
  
  }
  teams = [null,1,2,3,4,5];
  trueLabels = [null,"Democrats","Republicans","Neutral"]

  model = new Predict(null,null,null,null);
  response = null;
  submitted = false;

  onSubmit(){
    this.service.create(this.model)
      .subscribe((data: Response[] ) => {
        this.data.storage = data[0];
        this.submitted = true;
        console.log("data length :"+data.length);
        console.log(JSON.stringify(this.data.storage));
        this.router.navigate(["/predict-response"]);
      });
  }

  get diagnostic() { return JSON.stringify(this.model); }
}

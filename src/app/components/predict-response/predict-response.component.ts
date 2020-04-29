import { Component, OnInit, Input } from '@angular/core';
import { Response } from "../../interfaces/response";
import {ActivatedRoute} from "@angular/router";
import { Data } from "src/app/providers/data";

@Component({
  selector: 'app-predict-response',
  templateUrl: './predict-response.component.html',
  styleUrls: ['./predict-response.component.css']
})
export class PredictResponseComponent implements OnInit {

  public response: Response;
  /**
   *
   */
  constructor(private data: Data) {
    this.response = data.storage;
    console.log(JSON.stringify(this.data.storage));
  }

  ngOnInit(): void {
  }

}

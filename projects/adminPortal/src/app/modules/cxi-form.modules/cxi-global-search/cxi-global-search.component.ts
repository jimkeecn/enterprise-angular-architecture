import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnDestroy
} from "@angular/core";
import { Observable, pipe } from "rxjs";
import { FormBuilder } from "@angular/forms";
import { switchMap, debounceTime, tap, map } from "rxjs/operators";
import { SubSink } from "subsink";

const FAKE_GLOBAL_SEARCH_RESULT = [
  {
    id: 1,
    type: "Account Enquiry",
    path: "account-enquiry/A100045",
    value: "A100045",
    subValue: "John Smith & Samantha Smith"
  },
  {
    id: 2,
    type: "Account Enquiry",
    path: "account-enquiry/A100065",
    value: "A100065",
    subValue: "John Fundation Legal Advice Ltd Ptd"
  },
  {
    id: 3,
    type: "Investor Enquiry",
    path: "investor-enquiry/I200014",
    value: "I200014",
    subValue: "John Smith"
  },
  {
    id: 4,
    type: "Investor Enquiry",
    path: "investor-enquiry/I200250",
    value: "I200250",
    subValue: "Samantha Smith"
  },
  {
    id: 5,
    type: "Transaction Enquiry",
    path: "investor-enquiry/R300045",
    value: "R300045",
    subValue: "John Smith & Samantha Smith"
  }
];

@Component({
  selector: "app-cxi-global-search",
  templateUrl: "./cxi-global-search.component.html",
  styleUrls: ["./cxi-global-search.component.scss"]
})
export class CxiGlobalSearchComponent implements OnInit, OnDestroy {
  @Input() logo: string;
  @Output() searchOutPut = new EventEmitter();
  @Output() closeGlobalSearch = new EventEmitter();

  private subsink = new SubSink();
  private searchResultListNone: boolean;
  public searchResultList: any[] = [];
  constructor(private fb: FormBuilder) {}

  searchForm = this.fb.group({
    searchTerm: [""]
  });
  ngOnInit() {
    this.subsink.add(
      this.searchForm
        .get("searchTerm")
        .valueChanges.pipe(debounceTime(500))
        .subscribe(res => {
          if (res.length > 3) {
            this.internalSearch(res);
          }
        })
    );
  }

  ngOnDestroy(): void {
    this.subsink.unsubscribe();
  }

  private closeGS() {
    this.closeGlobalSearch.emit(false);
  }

  private internalSearch(term: string) {
    const result = FAKE_GLOBAL_SEARCH_RESULT.filter(item => {
      if (
        item.value.toLowerCase().includes(term.toLowerCase()) ||
        item.subValue.toLowerCase().includes(term.toLowerCase())
      ) {
        return item;
      }
    });
    console.log(result);
    setTimeout(() => {
      if (result.length > 0) {
        this.searchResultListNone = false;
        this.searchResultList = result;
      } else {
        this.searchResultListNone = true;
      }
    }, 500);
  }
}

export const htmlTemplate = `
  <div *ngIf="hero">
    <h2>{{hero.name}} details!</h2>
    <div>
        <label>id: </label>{{hero.id}}
    </div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name"/>
    </div>
    <button (click)="gotoHeroes()">Back</button>
    <button (click)="save()">Save</button>
  </div>
`;

import { of } from 'rxjs'; 
import { map } from 'rxjs/operators';


const source = of('World').pipe(
  map(x => `Hello ${x}!`)
);

source.subscribe(x => console.log(x));

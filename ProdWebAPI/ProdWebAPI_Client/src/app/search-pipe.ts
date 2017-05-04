import {Pipe} from '@angular/core';

@Pipe({
  name: 'find'
})

export class SearchPipe {
    
  transform(pipeData:any, [pipeModifier]:any) {
    return pipeData.filter((eachItem:any) => {
      return eachItem['name'].toLowerCase().includes(pipeModifier.toLowerCase()) ||
             eachItem['reknown'].toLowerCase().includes(pipeModifier.toLowerCase());
    });
  }
}

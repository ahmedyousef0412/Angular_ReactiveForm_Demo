import { FormControl } from "@angular/forms";


export class CustomValidator{
    static noSpaceAllowed (control: FormControl)  {

        if (control.value != null && control.value.indexOf(' ') != -1) //there are a space
            return { noSpaceAllowed: true }
        else
            return null;
    
    }
}

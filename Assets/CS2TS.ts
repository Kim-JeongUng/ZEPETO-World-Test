
import { Debug } from 'UnityEngine'
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class CS2TS extends ZepetoScriptBehaviour {

    Start() {    
        console.log("TypeScript running");
    }
    Update() {
        console.log(this.gameObject.transform.position);
    }
}
import { CharacterController, GameObject, Vector3 } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class PlayerManager extends ZepetoScriptBehaviour {
    public player: CharacterController;
    public respawnPosition: GameObject;
    Start() {    

    }
    FindPlayer() {
        this.player = GameObject.FindObjectOfType<CharacterController>();
    }
    CheckAlive() {
        return this.player.transform.position.y > -10;
    }
    Update() {

        if (!this.player) {
            this.FindPlayer();
            return;
        }
        if (!this.CheckAlive()) {
            this.player.enabled = false;
            this.player.transform.position = this.respawnPosition.transform.position;
            this.player.enabled = true;
        }
        console.log("dd");
    }   
}
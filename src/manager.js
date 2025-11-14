import { LoadingManager } from "three";

export function loadingManager(){
    const loadingManager = new LoadingManager()
    loadingManager.onLoad = function () {
        console.log('loaded!')
    }
    return loadingManager;
}
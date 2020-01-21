import { takeEvery } from 'redux-saga/effects';
import ShopActionTypes from './shop.types';

export function*fetchCollectionAsync(){
yield console.log("i am fried")
}
export function*fetchCollectionStart(){
yield takeEvery(ShopActionTypes.FETCH_COLLECTION_START,fetchCollectionAsync)
}

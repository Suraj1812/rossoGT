import test from 'node:test';
import assert from 'node:assert/strict';
import {createDriveSession,interactSession,stepDriveSession} from '../src/drive-session.js';
test('fuel stations cannot refill moving cars or cars that leave the forecourt',()=>{
 const session=createDriveSession();session.fuel=.4;
 interactSession(session,{type:'fuel'},12);assert.equal(session.refueling,false);
 interactSession(session,{type:'fuel'},0);assert.equal(session.refueling,true);
 stepDriveSession(session,0,0,.05,{type:'fuel'});assert(session.fuel>.4);
 const before=session.fuel;
 stepDriveSession(session,0,0,.05,undefined);assert.equal(session.refueling,false);assert.equal(session.fuel,before);
});
test('parking requires a marked area and a stationary car, and can be released',()=>{
 const session=createDriveSession();
 interactSession(session,undefined,0);assert(!session.parked);
 interactSession(session,{type:'parking'},4);assert(!session.parked);
 interactSession(session,{type:'parking'},0);assert(session.parked);
 const fuel=session.fuel;stepDriveSession(session,0,0,.05,{type:'parking'});assert.equal(session.fuel,fuel);
 interactSession(session,undefined,0);assert(!session.parked);
});

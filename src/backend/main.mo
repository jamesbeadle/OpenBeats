import Debug "mo:base/Debug";
import Result "mo:base/Result";
import Option "mo:base/Option";
import Array "mo:base/Array";
import Buffer "mo:base/Buffer";
import Principal "mo:base/Principal";
import T "types/app_types";
import Base "types/base_types";
import DTOs "dtos/app_dtos";
import Environment "environment";
import Cycles "mo:base/ExperimentalCycles";
import Timer "mo:base/Timer";
import Int "mo:base/Int";
import Time "mo:base/Time";
import Utilities "utilities";
import Management "management";

actor Self {

     
    private stable var dataHashes : [Base.DataHash] = [];

    public shared composite query func getDataHashes() : async Result.Result<[DTOs.DataHashDTO], T.Error> {
      return #ok(dataHashes);
    };


    system func preupgrade() {
    };

    system func postupgrade() {
      ignore Timer.setTimer<system>(#nanoseconds(Int.abs(1)), postUpgradeCallback); 
    };

    private func postUpgradeCallback() : async (){
    };

}

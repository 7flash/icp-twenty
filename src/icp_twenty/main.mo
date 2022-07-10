import Array "mo:base/Array";
import Principal "mo:base/Principal";
import Time "mo:base/Time";
import Int "mo:base/Int";

actor {
  var achievements: [var Text] = [var];

  var idx: Nat = 0;

  public shared (msg) func createAchievement(description: Text) : async Text {
    let caller: Text = Principal.toText(msg.caller);
    var achievement: Text = Int.toText(Time.now() / 1_000_000) # " --- " # description;

    var tmp = Array.init<Text>(achievements.size() + 1, "");
    for ((idx) in achievements.keys()) {
      tmp[idx] := achievements[idx];
    };
    tmp[achievements.size()] := achievement;

    achievements := tmp;

    return achievement;
  };

  public query func queryAll() : async [Text] {
    Array.tabulate<Text>(achievements.size(), func(i: Nat) : Text {
      achievements[i];
    });
  };
};

import { assert, HmacSha256 } from "./deps.ts";
function compareArrayBuffer(a, b) {
    assert(a.byteLength === b.byteLength, "ArrayBuffer lengths must match.");
    const va = new DataView(a);
    const vb = new DataView(b);
    const length = va.byteLength;
    let out = 0;
    let i = -1;
    while (++i < length) {
        out |= va.getUint8(i) ^ vb.getUint8(i);
    }
    return out === 0;
}
export function compare(a, b) {
    const key = new Uint8Array(32);
    globalThis.crypto.getRandomValues(key);
    const ah = (new HmacSha256(key)).update(a).arrayBuffer();
    const bh = (new HmacSha256(key)).update(b).arrayBuffer();
    return compareArrayBuffer(ah, bh);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHNzQ29tcGFyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRzc0NvbXBhcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFL0MsU0FBUyxrQkFBa0IsQ0FBQyxDQUFjLEVBQUUsQ0FBYztJQUN4RCxNQUFNLENBQUMsQ0FBQyxDQUFDLFVBQVUsS0FBSyxDQUFDLENBQUMsVUFBVSxFQUFFLGlDQUFpQyxDQUFDLENBQUM7SUFDekUsTUFBTSxFQUFFLEdBQUcsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0IsTUFBTSxFQUFFLEdBQUcsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0IsTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQztJQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDWixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNYLE9BQU8sRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFO1FBQ25CLEdBQUcsSUFBSSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDeEM7SUFDRCxPQUFPLEdBQUcsS0FBSyxDQUFDLENBQUM7QUFDbkIsQ0FBQztBQU9ELE1BQU0sVUFBVSxPQUFPLENBQ3JCLENBQStDLEVBQy9DLENBQStDO0lBRS9DLE1BQU0sR0FBRyxHQUFHLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQy9CLFVBQVUsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZDLE1BQU0sRUFBRSxHQUFHLENBQUMsSUFBSSxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDekQsTUFBTSxFQUFFLEdBQUcsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN6RCxPQUFPLGtCQUFrQixDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNwQyxDQUFDIn0=
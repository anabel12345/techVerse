// factory function that keeps track of women in tech spotlights
export default function WITManager() {
  const WITarr = [];
  function addWIT(WITObject) {
    WITarr.push(WITObject);
  }
  function deleteWIT(WITObject) {
    const index = WITarr.findIndex(WITObject);
    WITarr.splice(index, index + 1);
  }
  function accessArr() {
    return [...WITarr];
  }
  return { addWIT, deleteWIT, accessArr };
}

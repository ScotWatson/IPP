/*
(c) 2022 Scot Watson  All Rights Reserved
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

window.addEventListener("load", function () {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
  document.body.appendChild(document.createTextNode("IP Address of printer: "));
  const elemIPAddress = document.createElement("input");
  document.body.appendChild(elemIPAddress);
  const btnFetch1 = document.createElement("button");
  btnFetch1.innerHTML = "Fetch 1";
  document.body.appendChild(btnFetch1);
  btnFetch1.addEventListener("click", function (evt) {
    const dest1 = "ipps://" + elemIPAddress.value;
    const data = Uint8Array.from([ 0x01, 0x00, 0x00, 0x0A, 0x03, 0x00]);
    const myBlob = new Blob(data, { type: "application/ipp" });
    fetch(dest1, { method: "POST", body: myBlob}).then(showResponse, showError);
    function showResponse(response) {
      console.log(response);
      alert("done");
    }
    function showError(error) {
      console.error(error);
      alert("done");
    }
  });
  const btnFetch2 = document.createElement("button");
  btnFetch2.innerHTML = "Fetch 2";
  document.body.appendChild(btnFetch2);
  btnFetch2.addEventListener("click", function (evt) {
    const dest2 = "https://" + elemIPAddress.value + ":631";
    const data = Uint8Array.from([ 0x01, 0x00, 0x00, 0x0A, 0x03, 0x00]);
    const myBlob = new Blob(data, { type: "application/ipp" });
    fetch(dest2, { method: "POST", body: myBlob}).then(showResponse, showError);
    function showResponse(response) {
      console.log(response);
      alert("done");
    }
    function showError(error) {
      console.error(error);
      alert("done");
    }
  });
});

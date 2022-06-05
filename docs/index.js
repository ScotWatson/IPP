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
  const btnFetch = document.createElement("button");
  btnFetch.innerHTML = "Fetch";
  document.body.appendChild(btnFetch);
  btnFetch.addEventListener("click", function (evt) {
    const dest1 = "ipps://" + elemIPAddress.value;
    const dest2 = "https://" + elemIPAddress.value + ":443";
    const data = Uint8Array.from([ 0x01, 0x00, 0x00, 0x0A, 0x03, 0x00]);
    const myBlob = new Blob(data, { type: "application/ipp" });
    fetch(dest1, { method: "POST", body: myBlob}).then(showResponse, showError);
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

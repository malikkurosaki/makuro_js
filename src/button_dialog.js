// eslint-disable-next-line no-unused-vars
const $ = require('jquery');

/**
 * 
 * @param {Object} param 
 * @param {String} param.text
 * @param {HTMLElement} param.content
 * @param {HTMLElement[]} param.action
 * @param {HTMLElement} param.title
 * @example
 * ```
 * ButtonDialog({
 *  title: "muncullah"
 * });
 * ```
 */
function ButtonDialog(param) {

  const modal = $(
    `
    <div>
      <button type="button" class="tombol m-1 btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
      </button>
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="judul modal-title" id="exampleModalLabel"></h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="isi modal-body"></div>
            <div class="action modal-footer"></div>
          </div>
        </div>
      </div>
    </div>
    `
  );

  if(param && param.text) $(modal[0].getElementsByClassName('tombol')).append(param.text);
  if(param && param.title) $(modal[0].getElementsByClassName('judul')).append(param.title);
  if(param && param.content) $(modal[0].getElementsByClassName('isi')).append(param.content);
  if(param && param.action) $(modal[0].getElementsByClassName('action')).append(param.action);
  

  return param? modal: "isikan parameternya"
  
}

module.exports = ButtonDialog
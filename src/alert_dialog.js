
$(document.body).append("<div id='dlg'></div>")

/**
 * 
 * @param {Object} param 
 * @param {HTMLElement} param.content
 * @param {HTMLElement[]} param.action
 * @param {HTMLElement} param.title
 * @example
 * ```
 * ModalDialog({
 *  title: "muncullah",
 *  text: 
 *  content: 
 *  action: [],
 *  title: 
 * });
 * ```
 */
function AlertDialog(param) {

  const modal = $(
    `
    <div>
      <div type="button" class="tombol m-1 btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"></div>
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

  if(param && param.title) $(modal[0].getElementsByClassName('judul')).append(param.title);
  if(param && param.content) $(modal[0].getElementsByClassName('isi')).append(param.content);
  if(param && param.action) $(modal[0].getElementsByClassName('action')).append(param.action);
    

  
  $(modal[0].getElementsByClassName("tombol")).hide();

  setTimeout(() => {
    $(modal[0].getElementsByClassName("tombol")).trigger("click")
  }, 100);

  $("#dlg").html(modal);

}

module.exports = AlertDialog
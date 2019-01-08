export default `
            <div class="modal-header">
                <h5 class="modal-title">Select the correct article</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body extra-word">
             <form class="form-group form-check answer">
                 <input type="radio" class="form-check-input answer" id="exampleCheck1" name = "answer">
                 <label class="form-check-label sequence " for="exampleCheck1"></label>
                 <input type="radio" class="form-check-input answer" id="exampleCheck2" name = "answer">
                 <label class="form-check-label sequence" for="exampleCheck2"></label>
             </form>
             </div>
            
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" id = "save-changes" data-dismiss="modal">Save changes</button>
            </div>
        `;

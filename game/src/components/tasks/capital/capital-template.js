export default `
           <div class="modal-header">
    <h5 class="modal-title">Capitals</h5>
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
    </button>
</div>
<div class="modal-body capital">
    <div class="capital">
        <p id="answer"></p>
    </div>
    <div class="input-group mb-3">
        <input type="text" id="client-answer" class="form-control" placeholder="Your result" aria-label="Your result"
               aria-describedby="button-addon2">
    </div>
</div>
<div class="modal-footer">
    <button type="button" class="btn btn-secondary" id="save-changes" data-dismiss="modal">Save changes</button>
</div>
        `;

export default `
<div class="modal-header">
    <h5 class="modal-title">Enter the result of the calculation</h5>
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
    </button>
</div>
<div class="modal-body arithmetic-task">
    <div class="arithmetic-example">
        <div class="first-number"></div>
        <div class="arithmetic-operator"></div>
        <div class="second-number"></div>
    </div>
    <div class="input-group mb-3">
        <input type="text" class="form-control" id = "client-answer" placeholder="Your result" aria-label="Your result"
               aria-describedby="button-addon2">
    </div>
</div>
<div class="modal-footer">
    <button type="button" class="btn btn-secondary" id="save-changes" data-dismiss="modal">Save changes</button>
</div>
`;

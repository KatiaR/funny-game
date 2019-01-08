export default `
<div class="modal-header">
    <h5 class="modal-title">Restore the sequence</h5>
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
    </button>
</div>
<div class="modal-body sequence" id = "client-answer">
    <ul>
        <li draggable="true" class="sortable">List Item 1</li>
        <li draggable="true" class="sortable">List Item 2</li>
        <li draggable="true" class="sortable">List Item 3</li>
        <li draggable="true" class="sortable">List Item 4</li>
        <li draggable="true" class="sortable">List Item 5</li>
    </ul>
</div>
<div class="modal-footer">
    <button type="button" class="btn btn-secondary" id="save-changes" data-dismiss="modal">Save changes</button>
</div>
`;

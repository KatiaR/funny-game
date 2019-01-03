export default `
<div class="modal-header">
        <h5 class="modal-title" id="exampleModalCenterTitle">Select a spell</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body btn-spell">
      <button type="button" id = "arithmetic-task" class="btn btn-outline-primary type-spell">Arithmetic task</button>
      <button type="button" id = "vocabularyEnToRus-task" class="btn btn-outline-primary type-spell">Translation en-ru</button>
      <button type="button" id = "sorting-task"  class="btn btn-outline-primary type-spell">Sorting task</button>
      <button type="button" id = "compare-task"  class="btn btn-outline-primary type-spell">Compare task</button>
      <button type="button" id = "vocabularyRuToEn-task"  class="btn btn-outline-primary type-spell">Translation ru-en</button>
      <button type="button" id = "extraWord-task"  class="btn btn-outline-primary type-spell">Extra words</button>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" id = "save" data-dismiss="modal">Save changes</button>
      </div>
`;

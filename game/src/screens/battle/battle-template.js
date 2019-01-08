export default `

<section class="battle-field">
    <nav class="navbar navbar-light bg-light">
        <div class="names-participants"><a class="navbar-brand" id='hero-name' href="#">Hero</a></div>
        <div class="names-participants"><a class="navbar-brand" id='monster-name' href="#">Monster</a></div>
    </nav>
    <div class="d-flex justify-content-around participants-place">
        <div class="hero-field">
            <div class="progress">
                <div class="progress-bar progress-bar-hero" role="progressbar" style="width: 100%;" aria-valuenow="25"
                     aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
        <div class="monster-field">
            <div class="progress">
                <div class="progress-bar progress-bar-monster" role="progressbar" style="width: 100%;"
                     aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
    </div>
    <div class="button-position">
        <button type="button" class="btn btn-primary" id="btn-spell" data-toggle="modal"
                data-target="#exampleModalCenter">
            Сhoose a spell
        </button>
    </div>
    <button type="button" class="btn btn-primary" id="btn-score" data-toggle="modal" data-target="#exampleModalCenter">
        Results table
    </button>
</section>
`;

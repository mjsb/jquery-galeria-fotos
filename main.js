$(document).ready(function() {
    
    $('header button').click(function() {
        $('form').slideDown()
    })

    $('#btn-cancel').click(function() {
        $('form').slideUp()
    })

    $('form').on('submit', function(e) {
        
        e.preventDefault()

        const linkNewImg = $('#link-new-img').val()
        const novoItem = $('<li style="display: none"></li>')

        $(`<img src="${linkNewImg}" />`).appendTo(novoItem)
        $(`
            <div class="link">
                <a href="${linkNewImg}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem)

        $(novoItem).appendTo('ul')
        $(novoItem).fadeIn(1000)

        $('#link-new-img').val('')

    })
})
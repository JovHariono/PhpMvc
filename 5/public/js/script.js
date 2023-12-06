$(function(){
    $('.tombolTambahData').on("click", function(){
        $("#formModalLabel").html("Tambah Data Mahasiswa")
        $(".modal-footer button[type=submit]").html('Submit')

    })

    $('.tampilModalUbah').on('click', function(){
        $("#formModalLabel").html("Ubah Data Mahasiswa")
        $(".modal-footer button[type=submit]").html('Ubah Data')
        $(".modal-body form").attr("action", "http://localhost:8080/phpmvc/5/public/mahasiswa/ubah")

        const id= $(this).data('id');
        
        $.ajax({
            url: 'http://localhost:8080/phpmvc/5/public/mahasiswa/getubah',
            data: {id : id},
            method: "post",
            dataType: 'json',
            success : function(data){
                $('#id').val(data.id)
                $('#nama').val(data.nama)
                $('#nrp').val(data.nrp)
                $('#email').val(data.email)
                $('#jurusan').val(data.jurusan)
            }
        })

    })

})
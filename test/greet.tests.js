describe('Greet function test' , function(){
    it("should return ' Hellow ,Gcinile'when called with 'Gcinile'", function(){
        assert.equal(greet('Gcinile'), 'Hello, Gcinile'),'this should be true';
        assert.equal(greet('Bob'), 'Hello, Bob'),'this should be true';
    });
    
    });
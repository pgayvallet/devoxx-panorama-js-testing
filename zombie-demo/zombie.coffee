should = require('chai').should()
Browser = require('zombie')

home = 'http://localhost:8080/'

describe 'serpodile', ->

	it 'should check the homepage is up', (done) ->
		browser = new Browser()
		browser.visit home, ->
			browser.success.should.be.true
			done()

	it 'should check the title', (done) ->
		browser = new Browser()
		browser.visit home, ->
			browser.text('title').should.have.string 'Boutique Serpodile.'
			done()

	it 'should add a product in the basket when clicked', (done) ->
		browser = new Browser()
		browser.visit home, ->
			browser.clickLink "#mon-cahier-7", ->
				browser.text('#nb-article').should.equal '1 article'
				browser.cookies().get("serpodile_cart").should.have.string 'mon-cahier-7'
				done()

	it 'should order a product', (done) ->
		browser = new Browser()
		browser.visit home, ->
			browser.clickLink '#mon-cahier-7', ->
				browser.clickLink 'Panier', ->
					browser.clickLink '.btn_valider', ->
						browser.fill("prenom", "Headless")
						browser.fill("nom", "Zombie")
						browser.fill("email", "headlesszombie@morlhon.net")
						browser.fill("nom_l", "Headless Zombie")
						browser.fill("adresse_l", "66 rue ambroise croizat")
						browser.fill("adresse_complement_l", "this rocks")
						browser.fill("code_postal_l", "78800")
						browser.fill("ville_l", "Houilles")
						browser.select("pays_l", "france")
						browser.check("cgv")
						browser.pressButton "#validate", ->
							browser.success.should.be.true
							browser.authenticate().basic "test", "test"
							browser.visit "#{home}orders.html", ->
								browser.text("tr:nth-child(1) > td:nth-child(2)").should.equal '9.0 €'
								#browser.evaluate('$("table#orderTable > tbody > tr:nth-child(1) > td").click()')
								browser.fire 'click','table#orderTable > tbody > tr:nth-child(1) > td', ->
								# browser.wait 1000, ->
									console.log browser.query("#quoi > tr > td:nth-child(1)")
									browser.viewInBrowser()
									browser.text(".product_title").should.equal 'Mon Cahier 7 mm'
									done()


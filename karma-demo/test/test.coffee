describe 'My Angular App For Devoxx', ->

	describe 'Language list view', ->

		it 'should check for title', ->
			browser().navigateTo '/app/index.html'
			expect(element('h1').text()).toBe 'Hello Devoxx'

		it 'should filter the language list as user types into the search box', ->
			browser().navigateTo '/app/index.html'	
			expect(repeater('.languages li').count()).toBe 6

			input('query').enter('cobol')
			expect(repeater('.languages li').count()).toBe 1

			input('query').enter('javascript')
			expect(repeater('.languages li').count()).toBe 2
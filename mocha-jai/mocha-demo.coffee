should = require('chai').should()

FizzBuzz = (value) ->
	return undefined unless value?
	return "fizz" if value == 3
	"#{value}"

describe 'FizzBuzz', ->

	it 'should be undefined for undefined', ->
		should.not.exist FizzBuzz()

	it 'should be one for 1', ->
		FizzBuzz(1).should.equal "";

	it 'should be fizz for 3', ->
		FizzBuzz(3).should.equal "fizz"
require 'rails_helper'

RSpec.describe Product, type: :model do
  describe '.search_by' do
    let(:relation) { double }

    before { expect(Product).to receive(:all).and_return(relation) }

    context do
      it { expect { Product.search_by }.to_not raise_error }
    end

    context do
      before { expect(relation).to receive(:where).with('name ILIKE ?', 'abc%') }

      it { expect { Product.search_by 'term' => 'abc' }.to_not raise_error }
    end
  end
end
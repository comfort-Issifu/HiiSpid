import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./Select";

function FilterControls({sortBy, setSortBy, setCurrentPage, reviewsPerPage, setReviewsPerPage}) {
    return (
      <div
        id="reviews-section"
        className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
      >
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Sort by:</span>
            <Select value={sortBy} onValueChange={setSortBy} className="border-b-lime-600">
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-white border-[#E4E4E7]">
                <SelectItem className="hover:bg-[#F4F4F5]" value="newest">Newest</SelectItem>
                <SelectItem className="hover:bg-[#F4F4F5]" value="oldest">Oldest</SelectItem>
                <SelectItem className="hover:bg-[#F4F4F5]" value="highest">Highest Rated</SelectItem>
                <SelectItem className="hover:bg-[#F4F4F5]" value="lowest">Lowest Rated</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Reviews per page:</span>
          <Select
            value={reviewsPerPage.toString()}
            onValueChange={(value) => {
              setReviewsPerPage(Number(value));
              setCurrentPage(1); // Reset to first page
            }}
          >
            <SelectTrigger className="w-16">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-white border-[#E4E4E7]">
              <SelectItem value="5">5</SelectItem>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="15">15</SelectItem>
              <SelectItem value="20">20</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    );
}

export default FilterControls

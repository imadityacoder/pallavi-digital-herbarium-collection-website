import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { getAllFamilies } from '@/data/plants'

export default function SearchBar({ query, onQueryChange, family, onFamilyChange }) {
  const families = getAllFamilies()

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="relative flex-1">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted pointer-events-none"
          aria-hidden="true"
        />
        <Input
          type="search"
          placeholder="Search by scientific name, common name, or family..."
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          className="pl-10"
          aria-label="Search plants"
        />
      </div>

      <Select value={family} onValueChange={onFamilyChange}>
        <SelectTrigger className="sm:w-48" aria-label="Filter by plant family">
          <SelectValue placeholder="All Families" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Families</SelectItem>
          {families.map((f) => (
            <SelectItem key={f} value={f}>
              {f}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

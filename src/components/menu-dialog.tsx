
import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { logout } from "@/services/auth";
import { useNavigate } from "@tanstack/react-router";

export function MenuDialog() {
 const navigate = useNavigate()

 async function handleLogout() {
  try {
    await logout();
  } catch (error) {
    console.error(error);
  } finally {
    navigate({ to: "/login", replace: true });
  }
}

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Menu className="absolute right-0 size-10 text-seinfra-blue-light-400 cursor-pointer" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-md sm:h-40 rounded-3xl border-transparent p-6">
        <DialogHeader>
          <DialogTitle className="flex justify-center font-bold text-seinfra-blue-light-400">
            Menu
          </DialogTitle>
        </DialogHeader>
        <DialogFooter className="sm:justify-center">
          <DialogClose asChild>
            <Link to="/login">
              <Button
                type="button"
                variant="link"
                onClick={handleLogout}
                className="bg-seinfra-blue-light-300 w-full sm:w-40! h-12! text-xl rounded-2xl font-semibold text-background"
              >
                Sair
              </Button>
            </Link>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}   